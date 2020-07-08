let inpNewTask = $('#inpNewTask')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let ulTasks = $('#ulTasks')

function toggleButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

inpNewTask.keypress((e) => {
    if (e.which == 13) {
        btnAdd.click()
    }
    toggleButtons()
})

btnAdd.click(() => {
    if (inpNewTask.val() == '') {
        return
    }
    let listItem = $('<li>', {
        "class": 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleButtons()
})

btnReset.click(() => {
    inpNewTask.val('')
    toggleButtons()
})

btnCleanup.click(() => {
    $('#ulTasks .done').remove()
    toggleButtons()
})

btnSort.click(() => {
    let arr = ulTasks.children()
    console.log('arr = ', arr.toArray());
    let vec = []
    for (const ele in arr) {
        console.log(ele.text);
        vec.push(ele.text)
    }
    console.log(vec);
    $('#ulTasks .done').appendTo(ulTasks)
})