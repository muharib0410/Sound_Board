const sounds = ['announcement', 'bass-drop', 'crowded light', 'logo', 'clean-logo']

sounds.forEach (sound =>{
    const btn = document.createElement('button')
    btn.classList.add ('btn')

    btn.innerText = sound 

    document.getElementById('buttons').
    appendChild(btn)
})