import { Document, Link, Svg, Path, Page, Text, View, usePDF } from "@react-pdf/renderer"
import { Application, AppRole } from "@app/api/types"
import React from "react"

const MyDoc = (application: Application, consumer: Application, appRole: AppRole) => (
    <Document title="" creator="AppGuardian" author="AppGuardian" pdfVersion="1.7" creationDate={new Date()}>
        <Page size="A4">
            <View style={{ fontFamily: "Helvetica", fontSize: 14, margin: 30 }}>
                <View
                    style={{
                        paddingBottom: 10,
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#000"
                    }}
                >
                    <Svg width={126} height={20} viewBox="0 0 1000 159">
                        <Path
                            fill="#009999"
                            d="M3.086 152.537V122.46c17.119 5.388 32.267 8.082 45.444 8.082 18.193 0 27.291-4.809 27.291-14.42 0-3.583-1.324-6.594-3.978-9.032-2.714-2.586-9.665-6.171-20.835-10.764-20.042-8.241-33.111-15.269-39.19-21.082C3.939 67.571 0 57.895 0 46.202 0 31.144 5.74 19.667 17.212 11.78 28.557 3.962 43.33.057 61.554.057c10.041 0 24.574 1.848 43.583 5.549v28.933c-14.144-5.65-27.273-8.469-39.403-8.469-17.081 0-25.621 4.69-25.621 14.091 0 3.514 1.72 6.38 5.165 8.602 2.865 1.798 10.759 5.596 23.665 11.406 18.583 8.253 30.954 15.427 37.118 21.529 7.314 7.238 10.978 16.604 10.978 28.084 0 16.501-7.177 29.088-21.521 37.761-11.621 7.033-26.69 10.535-45.198 10.535-15.63 0-31.378-1.841-47.234-5.541h0zM141.063 2.704h0 42.54v152.297h-42.54zm81.553 152.297V2.704h109.105V30.25h-68.105v34.389h59.282v25.126h-59.282v36.141h69.86v29.095h-110.86zm138.631 0V2.704h55.155l38.319 97.311 39.28-97.311h52.389v152.297h-40.334V47.171l-44.664 109.376h-26.369L391.219 47.171v107.83h-29.972zm224.164 0V2.704h109.103V30.25h-68.099v34.389h59.28v25.126h-59.28v36.141h69.865v29.095H585.411zm138.86 0V2.704h49.304l52.308 101.951V2.704h29.964v152.297h-47.904L754.247 51.678v103.323h-29.976zm161.776-2.464V122.46c16.974 5.388 32.12 8.082 45.452 8.082 18.195 0 27.282-4.809 27.282-14.42 0-3.583-1.289-6.594-3.854-9.032-2.728-2.586-9.708-6.171-20.945-10.764-19.982-8.173-33.064-15.198-39.199-21.082-7.875-7.605-11.807-17.317-11.807-29.146 0-14.993 5.726-26.432 17.21-34.319C911.514 3.961 926.304.056 944.53.056c10.247 0 23.525 1.627 39.81 4.896l3.761.653v28.933c-14.146-5.65-27.313-8.469-39.508-8.469-17.016 0-25.503 4.69-25.503 14.091 0 3.514 1.711 6.38 5.147 8.602 2.73 1.729 10.656 5.529 23.778 11.406 18.442 8.253 30.787 15.427 37.005 21.529 7.325 7.238 10.98 16.604 10.98 28.084 0 16.501-7.135 29.088-21.406 37.761-11.689 7.033-26.796 10.535-45.301 10.535-15.647.001-31.402-1.84-47.246-5.54h0z"
                        />
                    </Svg>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontFamily: "Helvetica-Bold", fontWeight: "bold", fontSize: 14 }}>
                        {consumer.displayName}
                    </Text>
                    <Text style={{ fontFamily: "Helvetica", fontSize: 12, paddingTop: 10 }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </Text>
                </View>
                <Text
                    style={{
                        fontFamily: "Helvetica-Bold",
                        fontWeight: "bold",
                        fontSize: 14,
                        marginTop: 30,
                        marginBottom: 10
                    }}
                >
                    Get a Bearer Token from your EntraID application
                </Text>
                <View
                    style={{
                        padding: 10,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 5,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "#ccc",
                        fontFamily: "Helvetica",
                        fontSize: 10
                    }}
                >
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ width: 70, flexShrink: 0 }}>
                            <Text>Application:</Text>
                        </View>
                        <View>
                            <Text>{consumer.displayName}</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10, display: "flex", flexDirection: "row" }}>
                        <View style={{ width: 70, flexShrink: 0 }}>
                            <Text>Token URL:</Text>
                        </View>
                        <View>
                            <Text>
                                https://login.microsoftonline.com/38ae3bcd-9579-4fd4-adda-b42e1495d55a/oauth2/v2.0/token
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingTop: 10,
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <View style={{ width: 70, flexShrink: 0 }}>
                            <Text>Client-ID:</Text>
                        </View>
                        <View>
                            <Text>{consumer.appId}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingTop: 10,
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <View style={{ width: 70, flexShrink: 0 }}>
                            <Text>Client-Secret:</Text>
                        </View>
                        <View>
                            <Text>***</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingTop: 10,
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <View style={{ width: 70, flexShrink: 0 }}>
                            <Text>Scope:</Text>
                        </View>
                        <View>
                            <Text>{`${application.appId}/.default`}</Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{
                        fontFamily: "Helvetica-Bold",
                        fontWeight: "bold",
                        fontSize: 14,
                        marginTop: 30
                    }}
                >
                    Please check our Bearer Token
                </Text>
                <Link
                    href="https://jwt.io"
                    style={{
                        fontFamily: "Helvetica",
                        fontSize: 12,
                        marginTop: 5,
                        marginBottom: 10
                    }}
                >
                    https://jwt.io
                </Link>
                <View
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 5,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "#ccc",
                        fontFamily: "Helvetica",
                        fontSize: 10
                    }}
                >
                    <Text>{`{`}</Text>
                    <Text style={{ paddingLeft: 20 }}>{`"aud": "${application.appId}",`}</Text>
                    <Text
                        style={{ paddingLeft: 20 }}
                    >{`"iss": "https://login.microsoftonline.com/38ae3bcd-9579-4fd4-adda-b42e1495d55a/v2.0",`}</Text>
                    <Text style={{ paddingLeft: 20 }}>{`...`}</Text>
                    <Text style={{ paddingLeft: 20 }}>{`"azp": "${consumer.appId}",`}</Text>
                    <Text style={{ paddingLeft: 20 }}>{`"roles": [ "${appRole.value}" ]`}</Text>
                    <Text>{`}`}</Text>
                </View>
            </View>
        </Page>
    </Document>
)

interface Props {
    application: Application
    consumer: Application
    appRole: AppRole
}
export default function AssignRolePdf({ application, consumer, appRole }: Props) {
    const [instance, updateInstance] = usePDF({ document: MyDoc(application, consumer, appRole) })

    if (instance.loading) return <div>Loading ...</div>
    if (instance.error) return <div>Something went wrong: {instance.error}</div>

    return (
        <a href={instance.url} download={`${consumer.displayName}.pdf`}>
            Download
        </a>
    )
}
