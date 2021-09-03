const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query GetBemutatkozasLang {
      bemutatkozas: allContentfulBemutatkozas {
          nodes {
            lang
          }
        },
        arak:allContentfulArak{
        nodes {
            lang
          }
        }
        
    }
  `)
    result.data.bemutatkozas.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/` : `/`,
            component: path.resolve(`src/templates/index-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })
    result.data.arak.nodes.forEach(b => {
        createPage({
            path: b.lang === "EN" ? `/en/` : `/`,
            component: path.resolve(`src/templates/index-template.js`),
            context: {
                lang: b.lang,
            },
        })
    })



}
