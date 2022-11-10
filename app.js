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
  .command(
    'add',
    'Add new note.',
    () => {
      console.log('Adding a new note...');
    },
  //   (argv) => {
  //     if (argv.title) {
  //       console.info(`Added note: ${argv.title} - ${argv.body}`);
  //     }
  //   }
  // )
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
  )
  .command({
    // another way to enter a command
    'command': 'remove',
    'describe': 'Command to remove note',
    handler: function(){
      console.log("Removing Note")
    }
  })
  .command(
    'list',
    'List notes',
    () => {
      console.log('Listing notes')
    }
  )
  .command(
    'read',
    'Read Notes',
    () => {
      console.log('Reading Notes')
    }
  )
  .parse();

