import fs from 'fs'

const getNotes = () => {
  return "Your notes..."
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    console.log(dataBuffer)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
  const notes = loadNotes()
  console.log(notes)
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New notes added')
  } else {
    console.log('Note title taken')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const remainingNotes = notes.filter((note) => {
    return note.title != title
  })
  notes.length = 0
  remainingNotes.map((note) => (
    notes.push(
      {
        title: note.title,
        body: note.body
      }
    )
  ))
  saveNotes(notes)
}

export { getNotes, addNote, removeNote }