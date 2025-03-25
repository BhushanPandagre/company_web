
const Portfolio = () => (
    <div className="text-center py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-600">Our Portfolio</h2>
      <p className="text-gray-600 mt-4">Take a look at some of our amazing projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1742897681~exp=1742901281~hmac=918181cdebf3c9786cd6f7f24edf3fd13c6467bff71d1f5e60856047b232bca3&w=996" alt="Project 1" className="rounded-md" />
          <h3 className="text-xl font-semibold mt-4">Project One</h3>
          <p className="text-gray-500">An innovative web solution.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1742898932~exp=1742902532~hmac=0c6a215c883eb09d96a6ad48e0d030a0c934a2eef6e5b57344fc73f19ccea500&w=996" alt="Project 2" className="rounded-md" />
          <h3 className="text-xl font-semibold mt-4">Project Two</h3>
          <p className="text-gray-500">Revolutionizing digital experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?t=st=1742898802~exp=1742902402~hmac=15ec82952e976583a445f2bd24a300a7c8989544564fc00dcecc3a5542c9f70d&w=900" alt="Project 3" className="rounded-md" />
          <h3 className="text-xl font-semibold mt-4">Project Three</h3>
          <p className="text-gray-500">Cutting-edge technology implementation.</p>
        </div>
      </div>
    </div>
  );
  
  export default Portfolio;
  