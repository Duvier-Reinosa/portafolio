import './Jobs.css'

function Jobs() {
  return (
    <div className="jobsContainer">
      <h2 className='sectionTitle'>Empleos</h2>
      <div className='jobs'>
        <div className='job'>
            <h3>Desarrollador Full Stack</h3>
            <p>Empresa: Integ.ro</p>
            <p>Fecha: Mayo 2022 - actual</p>
        </div>
        <div className='job'>
            <h3>Desarrollador Full Stack y Mobile</h3>
            <p>Empresa: Grupo Empresarial El Punto Colombia</p>
            <p>Fecha: Agosto 2021 - Abril 2022</p>
        </div>
        <div className='job'>
            <h3>Desarrollador Mobile</h3>
            <p>Empresa: MultiServicios Rapidín</p>
            <p>Fecha: Enero 2018 - Diciembre 2019</p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;