export const Configurations = {
    API: {
        url: "http://192.168.64.2/hi-api/",
        projects: function(){
            return this.url+"desarrollos.php" //Api must return JSON string of all projects
        }
    }
};