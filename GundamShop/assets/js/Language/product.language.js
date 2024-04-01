$(async () => {
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct


    $("#vie").click(() => {
        dataProduct = vi;

        switchNavFooterVi(dataProduct.content_nav_footer);
        for ([key, value] of Object.entries(dataProduct.content_products)) {
            $("#"+key).text(value.header);
        }
        $("#HD").text("HD-Gundam")
        $("#SD").text("SD-Gundam");
        $("#RG").text("RG-Gundam");
        $("#MG").text("MG-Gundam");
        $("#PG").text("PG-Gundam");
    });
    
    $("#eng").click(() => {
        dataProduct = en;
        
        switchNavFooterEn(dataProduct.content_nav_footer);
        for ([key, value] of Object.entries(dataProduct.content_products)) {
            $("#"+key).text(value.header);
        }
        $("#HD").text("HD-Gundam")
        $("#SD").text("SD-Gundam");
        $("#RG").text("RG-Gundam");
        $("#MG").text("MG-Gundam");
        $("#PG").text("PG-Gundam");
    });

})