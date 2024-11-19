window.onload = function () {
    createColumns();
    var photoPaths = ["../image/31.png", "../image/35.png", "../image/33.png", "../image/34.png", "../image/32.png", "../image/36.png"];
    var photoDescriptions = ["西十二花海", "雅荷", "东九圣光", "醉晚亭边", "主席的展望", "劲松"];
    addPhotos(photoPaths, photoDescriptions);
}

function createColumns() {
    var waterfallContainer = document.querySelector('.waterfall-container');
    for (var i = 0; i < 3; i++) {
        var column = document.createElement('div');
        column.className = 'waterfall-column';
        waterfallContainer.appendChild(column);
    }
}

function addPhotos(photoPaths, photoDescriptions) {
    photoPaths.forEach(function (path, index) {
        var minColumn = getMinHeightColumn();
        var photoItem = document.createElement('div');
        photoItem.className = 'photo-item';

        var img = document.createElement('img');
        img.src = path;
        img.alt = "School Scenery";

        var p = document.createElement('p');
        p.textContent = photoDescriptions[index];

        photoItem.appendChild(img);
        photoItem.appendChild(p);

        minColumn.appendChild(photoItem);
    });
}

function getMinHeightColumn() {
    var columns = document.querySelectorAll('.waterfall-column');
    var minColumn = columns[0];
    var minHeight = columns[0].offsetHeight;
    for (var i = 1; i < columns.length; i++) {
        var height = columns[i].offsetHeight;
        if (height < minHeight) {
            minHeight = height;
            minColumn = columns[i];
        }
    }
    return minColumn;
}