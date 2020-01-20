document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        var str = document.getElementById("text").value
        var characters = str.length
        var words = str.split(" ").length
        const div = document.createElement('div')
        div.textContent = `${words} words and ${characters} characters`
        document.body.appendChild(div)
    }
}, false)
