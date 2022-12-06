import chalk from 'chalk'
import validator from 'validator'
import yargs from 'yargs'

// Note: hideBin is a shorthand for process.argv.slice(2)

import { hideBin } from 'yargs/helpers'
import { getNotes } from './notes.js'
const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('exam@gmail.com'))

console.log(chalk.blue('Success oh yeah'))

console.log(process.argv[2])


yargs(hideBin(process.argv))
  .command({
    'command': 'add',
    'description': 'Add new note.',
    handler: () => {
      console.log('Adding a new note...');
    },
    'builder': {
      'title': {
        'alias': 't',
        'describe': 'Enter title of the note',
        'demandOption': true,
        'type': 'sting',
      },
      'body': {
        'alias': 'b',
        'describe': 'Enter the content for the note',
        'demandOption': true,
        'type': 'sting',
      },
    },
  })
  /* The problem with using .option for this case is that it provides the options for add generally for all add, remove, list and read when node app.js --help is run*/
  // .option('title', {
  //   alias: 't',
  //   type: 'string',
  //   description: 'Note title.',
  //   demandOption: true,
  // })
  // .option('body', {
  //   alias: 'b',
  //   type: 'string',
  //   description: 'Note content.',
  //   demandOption: true,
  // })
  // another way to enter a command
  .command({
    'command': 'remove',
    'describe': 'Command to remove note',
    /*Using the builder internally gets you the options for remove only when you enter node app.js remove --help*/
    'builder': {
      'id': {
        'alias': 'i',
        'describe': 'Enter id of the note',
        'demandOption': true,
        'type': 'number',
      },
    },
    handler:  () => {
      console.log("Removing Note")
    }
  })
  .command(
    'list',
    'List notes',
    () => {
      console.log('Listing notes')
    },
  )
  .command(
    'read',
    'Read Notes',
    () => {
      console.log('Reading Notes')
    }
  )
  .parse();

