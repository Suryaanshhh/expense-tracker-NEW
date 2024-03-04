const button = document.getElementById('submission');

button.addEventListener('click', function () {
    const expense = document.getElementById('expense').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const allExpense = {
        expense: expense,
        description: description,
        category: category
    }
    axios.post('http://localhost:3000/add-expense', allExpense).then(result => {
        console.log(result)
    }).catch(err => console.log(err))
})


window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:3000/show-expense')
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.expense.length; i++) {
                showUser(response.data.expense[i]);
            }
        })
        .catch((err) => { console.log(err) });
})
function showUser(user) {
    document.getElementById('expense').value;
    document.getElementById('description').value;
    document.getElementById('category').value;
    const parent = document.getElementById('listofexpense');
    const child = document.createElement('li');
    child.id = `${user.id}`;
    child.textContent = `${user.expense}-${user.description}-${user.category}`
    const DelButton = document.createElement('button');
    DelButton.textContent = 'Delete'
    DelButton.className = 'delete'
    const EditButton = document.createElement('button');
    EditButton.textContent = 'Edit'
    EditButton.className = 'edit'
    //parent.innerHTML = parent.innerHTML + child;
    parent.appendChild(child);
    child.appendChild(EditButton);

    child.appendChild(DelButton);

    DelButton.addEventListener('click', function Deleteuser() {
        console.log(child.id);
        axios.delete(`http://localhost:3000/delete-expense/${child.id}`)
            .then((response) => {
                // console.log(userId.config)
                removeExpenseFromScreen(child.id)
            })

        EditButton.addEventListener('click', function EditExpense() {
            const updatedExpense = {
                expense: allExpense.expense,
                description: allExpense.description,
                category: allExpense.category
            }

            axios.put(`http://localhost:3000/edit-expense/${child.id}`, updatedExpense)
                .then((response) => {
                    console.log(response)
                    document.getElementById('expense').value = allExpense.expense;
                    document.getElementById('description').value = allExpense.description;
                    document.getElementById('category').value = allExpense.category;
                    removeExpenseFromScreen(child.id)
                })

        })


    })
    function removeExpenseFromScreen(userId) {
        const parentNode = document.getElementById('listofexpense');
        const childNodeTOBeDeleted = document.getElementById(userId);
        if (childNodeTOBeDeleted) {
            parentNode.removeChild(childNodeTOBeDeleted);
        }
    }


}
