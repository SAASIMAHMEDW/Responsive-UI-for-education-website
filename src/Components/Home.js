const Home = () => {
    return (
        <>
         <h1>GALLERY</h1>
        {/* <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" class="img-thumbnail" alt="IMAGE"/> */}
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
        </>
    );
}

export default Home;