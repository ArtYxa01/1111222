const argv = require('yargs').argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const list = await listContacts();
      console.table(list);
      break;

    case 'get':
      const contactById = getContactById(id);
      console.log(contactById);
      break;

    case 'add':
      const addContacts = addContact(name, email, phone);
      console.log (addContact)
      break;

    case 'remove':
      const contactRemove = removeContact(id);
      console.log (removeContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);