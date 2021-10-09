const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getTrack(trackid) {
    return this.get(`track/${trackid}`);
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
  getTrackModules(trackid) {
    return this.get(`track/${trackid}/modules`);
  }
}

module.exports = TrackAPI;
