import express from 'express'
import projects from './data/projects.js'
import dotenv from 'dotenv'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
}))
app.use(express.json())

const dataDirectory = path.resolve(__dirname, process.env.DATA_PATH)
const contactsFile = path.join(dataDirectory, 'contacts.json')
const contactSubmissions = JSON.parse(
    fs.readFileSync(contactsFile, 'utf-8')
)

app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.get('/api/projects', (req, res) => {
    res.json(projects)
})

app.get('/api/projects/:id', (req, res) => {
    const projectId = parseInt(req.params.id)
    const project = projects.find(p => p.id === projectId)
    console.log(`Project ID requested: ${projectId}`)
    if (project) {
        res.json(project)
    } else {
        res.status(404).json({error: 'Project not found'})
    }
})

app.get('/api/contact', (req, res) => {
    res.json(contactSubmissions)
})

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body
    if(!name){
        return res.status(400).json({error: 'Name is required'})
    }

    if(!email){
        return res.status(400).json({error: 'Email is required'})
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        return res.status(400).json({error: 'Invalid email format'})
    }

    if(!message){
        return res.status(400).json({error: 'Message is required'})
    }
    
    const submission = {
        id : contactSubmissions.length + 1,
        name,
        email,
        message,
    }
    contactSubmissions.push(submission)
    fs.writeFileSync(contactsFile, JSON.stringify(contactSubmissions, null, 2), 'utf-8')
    res.status(201).json({message: 'Contact form submission received', submission})

    console.log('Contact form submission received:', name, email, message)
})

app.use((req, res) => {
    res.status(404).json({error: 'Route not found'})
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({error: 'Internal Server Error'})
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})