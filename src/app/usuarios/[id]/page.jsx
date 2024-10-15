import axios from "axios";

async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default async function Usuario({ params }) {
    const usuario = await getUsuario(params.id);
    return (
        <>
            <h1>Información del Usuario</h1>
            <ul>
                <li><strong>ID:</strong> {usuario.id}</li>
                <li><strong>Name:</strong> {usuario.name}</li>
                <li><strong>Username:</strong> {usuario.username}</li>
                <li><strong>Email:</strong> {usuario.email}</li>
                <li><strong>Phone:</strong> {usuario.phone}</li>
                <li><strong>Website:</strong> {usuario.website}</li>
                <li><strong>Address:</strong> {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}</li>
                <li><strong>Address Latitude:</strong> {usuario.address.geo.lat}</li>
                <li><strong>Address Longitude:</strong> {usuario.address.geo.lng}</li>
                <li><strong>Company:</strong> {usuario.company.name}</li>
                <li><strong>Company Catch Phrase:</strong> {usuario.company.catchPhrase}</li>
                <li><strong>Company BS:</strong> {usuario.company.bs}</li>
            </ul>
        </>
    );
}
