//1.  წამოვიღოთ მომხმარებლების სია ამ მისამართიდან http://api.kesho.me/v1/user-test/index.

const getUsers = fetch('http://api.kesho.me/v1/user-test/index')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })


//2. შევქმნათ მომხმარებლების ცხრილი (ცხრილი.png).

