function Profiles() {
    var self = this;
    self.tasksURI = 'https://e2wablxu2b.execute-api.us-east-1.amazonaws.com/development';
    //self.username = "";
    //self.password = "";


    self.ajax = function(uri, method, data) {
        var request = {
            url: uri,
            type: method,
            contentType: "application/json",
            accepts: "application/json",
            cache: false,
            dataType: 'json',
            data: JSON.stringify(data),
           // beforeSend: function (xhr) {
           //     xhr.setRequestHeader("Authorization", 
           //         "Basic " + btoa(self.username + ":" + self.password));
           // },
            error: function(jqXHR) {
                console.log("ajax error " + jqXHR.status);
            }
        };
        return $.ajax(request);
    }

    self.getProfiles = function() {
        return self.ajax(self.tasksURI+"/profiles", 'GET')
    }
   

    
}