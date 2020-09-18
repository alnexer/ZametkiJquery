let array = JSON.parse(localStorage.getItem('All Groups')) || []
console.log(array)

class Group {
    constructor(name) {
        this.name = name
        this.arr = this.getFromLS() || []
        this.setToAllGroups(this.name, array)
    }

    setToAllGroups(name, array) {
        let rawArray = new Set(array)
        if (!rawArray.has(name)) {
            rawArray.add(name)
        }
        let newRawArray = Array.from(rawArray)
        localStorage.setItem('All Groups', JSON.stringify(newRawArray))
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
        let newArr = toDoPlace.arr.slice()
        let thisArr = this.arr.slice()

        newArr.push(thisArr[key])
        thisArr.reverse().splice(key, 1)

        localStorage.setItem(this.name, JSON.stringify(thisArr))
        localStorage.setItem(toDoPlace.name, JSON.stringify(newArr))
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

        console.log(needableArray, this.arr)

        for (let key in needableArray) {
            $(docObj).append(`
            <div class="note">
                <h3 data-id='${key}'>${needableArray[key]}</h3>
                ${doItResult}
            </div>`)
        }
    }
}