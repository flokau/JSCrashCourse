Welcome to the Mountain Tour homework!

Models in this project:
- Mountain
- Hut
- Trail
- Mountaineer

What's possible:
- add a mountain: axios.post('/mountain',{"name":"Mountain"})
- add a hut (to the montain): axios.post('/hut',{"name":"Hut", "mountain":"5dd138a9b3eaa523723f3f96"})
- create a new trail: axios.post('/trail',{"name":"Trail","startHut":"5dd00f9998b8b77ae1fa3e3d","endHut":"5dd011aa7765197b4ee9b2f8"})

