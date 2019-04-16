export const Configurations = {
    API: {
        url: "http://api.habitareinmobiliaria.com.mx/",
        heroSlider: function(){
            return this.url+('desarrollos.php?hero_slider') //Api must return JSON string of 4 arrays made of all projects
        },
        projects: function(){
            return this.url+"desarrollos.php" //Api must return JSON string of all projects
        },
        projectInfo: function(id){
            return this.url+"desarrollos.php?id="+id
        },
        zones: function(){
            return this.url+"desarrollos.php?cdmx"
        },
        contact: function(){
            return this.url+"contacto.php"
        }
    }
};