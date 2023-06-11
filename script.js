document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const containers = document.querySelectorAll(".container");

    items.forEach(function(item) {
        item.addEventListener("dragstart", dragStart);
        item.addEventListener("dragend", dragEnd);
    });

    containers.forEach(function(container) {
        container.addEventListener("dragover", dragOver);
        container.addEventListener("dragenter", dragEnter);
        container.addEventListener("dragleave", dragLeave);
        container.addEventListener("drop", drop);
    });

    let draggedItem = null;

    function dragStart() {
        draggedItem = this;
        setTimeout(() => (this.style.display = "none"), 0);
    }

    function dragEnd() {
        setTimeout(() => (this.style.display = "block"), 0);
        draggedItem = null;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.style.backgroundColor = "lightgreen";
    }

    function dragLeave() {
        this.style.backgroundColor = "";
    }

    function drop() {
        this.style.backgroundColor = "";
        this.appendChild(draggedItem);
    }
});
