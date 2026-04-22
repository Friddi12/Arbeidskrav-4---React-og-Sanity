const gamlearbeidskrav = {
    name: 'oldreqs',
    title: 'Arbeidskrav',
    type: 'document',
    fields: [
        {name: 'reqname', title: 'ABnavn', type: 'string'},
        {name: 'reqdesc', title: 'ABbeskrivelse', type: 'text', rows: 3},
        {name: 'reqorder', title: 'ABrekkefolge', type: 'number'}
    ]
} 

export default gamlearbeidskrav