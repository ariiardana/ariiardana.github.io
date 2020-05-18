projek.forEach(prj => {
    const trg_sc = prj.sc === '#' ? '' : '_blank';
    const trg_web = prj.web === '#' ? '' : '_blank';
    const el = 
    `<div class="col-md-4 mb-5">
        <div class="card">
            <img id="foto" src="${prj.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prj.nama}</h5>
                <p class="card-text">${prj.desc} <br/><br/>
                    Dibuat dengan ${prj.dibuat}
                </p>
                <a target="${trg_sc}" href="${prj.sc}" id="sc" class="btn btn-primary"><i class="fab fa-github"></i></a>
                <a target="${trg_web}" href="${prj.web}" id="web" class="btn btn-primary"><i class="fas fa-globe"></i></a>
                <a href="#" id="status" class="btn btn-primary">Status: ${prj.status}</a>
            </div>
        </div>
    </div>`;
    $('#content_projek').append(el);
});