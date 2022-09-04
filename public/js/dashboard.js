const newBlogSave = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    console.log(title)
    console.log(content)

    if(title && content){
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location.replace('/dashboard')
        } else {
            alert('something is wrong')
        }
    }

};

const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')){
        console.log(event)
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        })

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert ('failed to delete blog')
        }
    }
}

$('.blog-btn')
    .on('click', newBlogSave);


$('.blog-delete')
    .on('click', delButtonHandler);