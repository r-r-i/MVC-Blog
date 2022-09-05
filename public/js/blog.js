const newCommentSave = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#blog-comment').value.trim();

    console.log(title)
    console.log(content)

    if(comment){
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location.replace('/dashboard')
        } else {
            alert('something is wrong')
        }
    }

};