export const Configurations = {
    API: {
        url: "http://192.168.64.2/hi-api/",
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
        }
    }
};