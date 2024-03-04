const button=document.getElementById('submission');

button.addEventListener('click',function(){
    const expense=document.getElementById('expense').value;
    const description=document.getElementById('description').value;
    const category=document.getElementById('category').value;
    
    const allExpense={
        expense:expense,
        description:description,
        category:category
    }
    axios.post('http://localhost:3000/add-expense',allExpense).then(result=>{
        console.log(result)
    }).catch(err=>console.log(err))
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
    //parent.innerHTML = parent.innerHTML + child;
    parent.appendChild(child);
    child.appendChild(DelButton);


}
