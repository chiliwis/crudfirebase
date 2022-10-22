
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from "react";



function Tabla() {
    const [datos, setDatos] = useState([]);
    const getData = async () => {
        // const snapshot = await onSnapshot(collection(db, "empleados"));
        // console.log(snapshot.docs.map(doc => doc.data()));
        // setDatos(snapshot.docs.map(doc => doc.data()));
        onSnapshot(collection(db, "empleados"), (querySnapshot) => {
            setDatos(querySnapshot.docs.map(doc => {
                return { ...doc.data() }
            }));
        });
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            {/* <code>{JSON.stringify(datos)}</code> */}
            <table className="table table-bordered">
                <thead classNAme="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Puesto</th>
                        <th>Fecha contratacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((empleado, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.puesto}</td>
                                    <td>{empleado.fecha_contratacion}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </>

    );
}

export default Tabla;