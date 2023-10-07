
const blockApply = document.getElementById("block-apply")
const aiApply = document.getElementById("ai-apply")
const select = document.getElementById('topic')

blockApply.addEventListener('click', function() {
    select.selectedIndex = 0
})

aiApply.addEventListener('click', function() {
    select.selectedIndex = 1
})