const Contacts = [
    {
        id:1,
        name:'john',
        isSaved: true
    },
    {
        id:2,
        name:'kennedy',
        isSaved: true
    },
    {
        id:3,
        name:'marcos',
        isSaved: false
    }

]
//TRADITIONAL LOOPING//
for(let i = 0; i < Contacts.length; i++)
{
    console.log(Contacts[i].name)
}
//OPTIMIZED LOOPING//
for(let contact of Contacts)
{
    console.log(contact.name)
}
//forEach LOOP//
Contacts.forEach(function(contact)
{
    console.log(contact.name)
})
//MAP//
const pangalan = Contacts.map(function(contact)
{
    return(contact.name);
})

console.log(pangalan)
//FILTER
const anothername = Contacts.filter(function(contact)
{
    return(contact.isSaved == true);
})

console.log(anothername)