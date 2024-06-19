    // Inicializar o slider
    $("#date-slider").slider({
        orientation: "horizontal",
        range:"min",
        min:1,
        max: 6,
        value: 1,
        slide: function(event, ui) {
            changeSlider(ui.value);
        }
    });

    let sliderCheck = null;
    let sliderbtnCheck = null;
    
    function changeSlider(opc){
        let sliderInfo;

        sliderInfo = $(`#slider_${opc}`);
        $("#date-slider").slider("value", opc);

        if (sliderCheck && sliderCheck.is(sliderInfo)) {
            sliderInfo.toggle();
            
            for (let i = 1; i <= 6; i++) {
                let btn = document.getElementById(`btn${i}`);
                btn.classList.remove('btn-selected');
                btn.classList.add('btn-unselected');
                
            }
            
            
            $("#date-slider").slider("value", 1);
            
            sliderbtnCheck =null;
        } 
        
        else {
            if (sliderCheck) {
                sliderCheck.hide();
                
            }
            sliderInfo.show();
            sliderCheck = sliderInfo;

            for (let i = 1; i <= opc; i++) {
                let btn = document.getElementById(`btn${i}`);
                btn.classList.remove('btn-unselected');
                btn.classList.add('btn-selected');
                
            }
            
            for (let i = opc +1; i <= 6; i++) {
                let btn = document.getElementById(`btn${i}`);
                btn.classList.remove('btn-selected');
                btn.classList.add('btn-unselected');
                
            }
            sliderbtnCheck =opc;
        }
        
     
        // handleClick();
    }
