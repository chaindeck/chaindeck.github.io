function change() {
    let typeCbs = document.querySelectorAll(".types input[type='checkbox']");
    let chainCbs = document.querySelectorAll(".chains input[type='checkbox']");
    let filters = {
        types: getClassOfCheckedCheckboxes(typeCbs),
        chains: getClassOfCheckedCheckboxes(chainCbs),
    };

    filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
    let classes = [];

    if (checkboxes && checkboxes.length > 0) {
        for (let i = 0; i < checkboxes.length; i++) {
            let cb = checkboxes[i];

            if (cb.checked) {
                classes.push(cb.getAttribute("name"));
            }
        }
    }

    return classes;
}

function filterResults(filters) {
    let snapshotList = document.querySelectorAll(".snapshot-list div");
    let hiddenElems = [];

    if (!snapshotList || snapshotList.length <= 0) {
        return;
    }

    for (let i = 0; i < snapshotList.length; i++) {
        let el = snapshotList[i];

        if (filters.types.length > 0) {
            let isHidden = true;

            for (let j = 0; j < filters.types.length; j++) {
                let filter = filters.types[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }

        if (filters.chains.length > 0) {
            let isHidden = true;

            for (let j = 0; j < filters.chains.length; j++) {
                let filter = filters.chains[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
    }

    for (let i = 0; i < snapshotList.length; i++) {
        snapshotList[i].style.display = "block";
    }

    if (hiddenElems.length <= 0) {
        return;
    }

    for (let i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
    }
}
