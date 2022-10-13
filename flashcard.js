const showContainer = document.querySelector(".hide-container");
const addButton = document.querySelector('#add-btn');
const closeButton = document.querySelector('.close-btn');
const saveButton = document.querySelector("#save-btn");
const errorp = document.querySelector(".errorp");
const questionInput = document.querySelector("#questionInput");
const answerInput = document.querySelector("#answerInput");
const saveContainer = document.querySelector('.save-container');
const innerSaveButton = document.querySelector('#inner-save-btn');

addButton.addEventListener('click', () => {
    showContainer.classList.add('show-container');
});

closeButton.addEventListener('click', () => {
    showContainer.classList.remove('show-container');
});

saveButton.addEventListener('click', () => {
    if ((questionInput.value.length == 0) || (answerInput.value.length == 0)){
        errorp.style.display = "block";
    }
    else{
        errorp.style.display = "none";

        const div = document.createElement('div');
        const questionHeader = document.createElement('h4');
        const linkAnswer = document.createElement('a');
        const answerHeader = document.createElement('h5');

        const divBtn = document.createElement('div');
        divBtn.classList.add('divBtn');

        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        div.classList.add('saveQuestion');
        answerHeader.classList.add('answerHide');

        questionHeader.textContent = questionInput.value.charAt(0).toUpperCase() + questionInput.value.slice(1);
        linkAnswer.textContent = "Show/Hide Answer";
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        answerHeader.textContent = answerInput.value;
        let question = questionInput.value;
        let answer = answerInput.value;

        editButton.classList.add('editQuestion');
        deleteButton.classList.add('deleteQuestion');

        div.appendChild(questionHeader);
        div.appendChild(linkAnswer);
        div.appendChild(answerHeader);
        divBtn.appendChild(editButton);
        divBtn.appendChild(deleteButton);
        div.appendChild(divBtn);

        saveContainer.appendChild(div);

        questionInput.value = "";
        answerInput.value = "";

        deleteButton.addEventListener('click', e => {
            saveContainer.removeChild(div);
        });

        linkAnswer.addEventListener('click', e => {
            answerHeader.classList.toggle('answerShow');
        });

        editButton.addEventListener('click', e => {
            questionInput.focus();
            questionInput.value = question;
            answerInput.value = answer;
            saveContainer.style.display = "none";
            innerSaveButton.style.display = "block";
            saveButton.style.display = "none";

            innerSaveButton.addEventListener('click', e => {
                questionHeader.textContent = questionInput.value.charAt(0).toUpperCase() + questionInput.value.slice(1);
                answerHeader.textContent = answerInput.value;
                
                saveContainer.style.display = "block";
                innerSaveButton.style.display = "none";
                saveButton.style.display = "block";

                questionInput.value = '';
                answerInput.value = '';
            });
        })

        saveButton.addEventListener('click', e => {
            innerSaveButton.style.display = "none";
            saveButton.style.display = "block";
            saveContainer.style.display = "block";
        });
    }
});



