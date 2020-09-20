const addNoteBtn = $('.addNote')
const extraNoteField = $('.extraNoteField')
const adderForm = $('form.adderForm')
const adderGroupForm = $('form.adderGroupForm')
const addGroup = $('.addGroup')

const lS = localStorage

addNoteBtn.on('click', OpenExtraFiled)
addGroup.on('click', OpenGroupCreationField)

//lS.clear()

const allNotes = new Group('Все записи')
const doneNotes = new Group('Сделанные')


currenGroup.innerAll('.allNotes', true, true)

function OpenExtraFiled() {
    addNoteBtn.toggleClass('clicked')
    extraNoteField.toggle(200, 'swing')
    $('.nameNote').focus()
}

function OpenGroupCreationField() {
    $('.groupCreationField').toggle(200, 'swing')
    $('.nameGroup').focus()
}

adderForm.on('submit', (e) => {
    e.preventDefault()

    let inpVal = $('input.nameNote').val()

    currenGroup.setToLS(inpVal)
    window.location.reload()
})

adderGroupForm.on('submit', (e) => {
    e.preventDefault()

    let inpVal = $('input.nameGroup').val()
    let newGroup = new Group(inpVal)

    window.location.reload()
})

$('.doNote').on('click', (e) => {
    const eTarget = e.currentTarget
    currenGroup.doNote(eTarget, doneNotes)
    location.reload()
})

$('.delNote').on('click', (e) => {
    const eTarget = e.currentTarget
    let key = eTarget.parentNode.querySelector('h3').getAttribute('data-id')

    currenGroup.delFromLS(key)
    window.location.reload()
})

$('.delGroup').on('click', (e) => {
    currenGroup.deleteGroup()

    window.location = '/'
})

let newOldArr = JSON.parse(lS.getItem('All Groups'))

$('h2.current').html(`${currenGroup.name} <span>${currenGroup.arr.length}</span>`)

for (key in newOldArr) {
    const storageKey = newOldArr[key]
    const jsonVal = lS.getItem(storageKey)
    const length = JSON.parse(jsonVal) || []

    if (newOldArr[key] != currenGroup.name) {
        $('.allGrInBlock').append(
            `<a href="/?g=${storageKey}">
                <h2 class = '${storageKey}' >
                    ${storageKey} 
                    <span>${length.length}</span>
                </h2>
            </a>`
        )
    }
}