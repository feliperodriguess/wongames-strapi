"use strict";

module.exports = {
  populate: async (ctx) => {
    console.log("🔥🎮Finding the best games");
    const options = {
      sort: "popularity",
      page: 1,
      ...ctx.query,
    };
    await strapi.services.game.populate(options);
    ctx.send({ success: "All done buddy!🍺" });
  },
};
