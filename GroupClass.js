let array = JSON.parse(localStorage.getItem('All Groups')) || []

function unique(arr) {
    let result = []

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }

    return result
}

class Group {
    constructor(name) {
        this.name = name
        this.arr = this.getFromLS() || []
        this.setToAllGroups(this.name, array)
    }

    setToAllGroups(name, array) {
        array.push(name)
        array = unique(array)

        localStorage.setItem('All Groups', JSON.stringify(array))
    }

    getFromLS(name) {
        let nameR = name || this.name

        return JSON.parse(localStorage.getItem(nameR))
    }

    setToLS(inpVal) {
        this.arr.push(inpVal)

        localStorage.setItem(this.name, JSON.stringify(this.arr))
    }

    doNote(keyObj, toDoPlace) {
        let key = keyObj.parentNode.querySelector('h3').getAttribute('data-id')

        toDoPlace.arr.push(this.arr[key])
        this.arr.splice(key, 1)
        localStorage.setItem(this.name, JSON.stringify(this.arr))
        localStorage.setItem(toDoPlace.name, JSON.stringify(toDoPlace.arr))
    }

    delFromLS(key) {
        let needableArray = this.arr

        needableArray.reverse().splice(key, 1)
        needableArray.reverse()
        localStorage.setItem(this.name, JSON.stringify(needableArray))
    }

    innerAll(docObj, doIt, rev, doItRes) {
        let reverS = rev || true
        let doItResult = doItRes || ''

        if (doIt) {
            doItResult = `<button class="doNote" data-r="${this.name}">✔</button>
            <button class="delNote" data-r="${this.name}">-</button>`
        } else {
            doItResult = `<button class="delNote" data-r="${this.name}">-</button>`
        }

        let needableArray = this.arr.slice()

        if (reverS) {
            needableArray.reverse()
        }

        for (let key in needableArray) {
            $(docObj).append(`
            <div class="note">
                <h3 data-id='${key}'>${needableArray[key]}</h3>
                ${doItResult}
            </div>`)
        }
    }
}