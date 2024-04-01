$(async () => {
    $(async () => {
        vi = await getProductsData("./data/vi.json");
        en = await getProductsData("./data/en.json");

        let dataProduct;


        $("#vie").click(() => {
            dataProduct = vi;
            switchNavFooterVi(dataProduct.content_nav_footer);
            $("#RGM_79D_GM_COLD_DISTRICTS_TYPE_HGUC").text(dataProduct.content_products.RGM_79D_GM_COLD_DISTRICTS_TYPE_HGUC.header);
            $("#PENELOPE_HGUC").text(dataProduct.content_products.PENELOPE_HGUC.header);
            $("#LEIF_GUNDAM_GP04_SDW_HEROES").text(dataProduct.content_products.LEIF_GUNDAM_GP04_SDW_HEROES.header);
        })

        $("#eng").click(() => {
            dataProduct = en;
            switchNavFooterEn(dataProduct.content_nav_footer);
            $("#RGM_79D_GM_COLD_DISTRICTS_TYPE_HGUC").text(dataProduct.content_products.RGM_79D_GM_COLD_DISTRICTS_TYPE_HGUC.header);
            $("#PENELOPE_HGUC").text(dataProduct.content_products.PENELOPE_HGUC.header);
            $("#LEIF_GUNDAM_GP04_SDW_HEROES").text(dataProduct.content_products.LEIF_GUNDAM_GP04_SDW_HEROES.header);
            // location.reload(true);
        })
    });
})