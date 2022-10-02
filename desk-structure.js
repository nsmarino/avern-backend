import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
        S.listItem()
            .title("Player Settings")
            .child(
                S.editor()
                    .id('player')
                    .schemaType("player")
                    .documentId("singleton-player")
            )
    ]);