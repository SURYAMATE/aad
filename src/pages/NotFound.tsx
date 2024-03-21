import i18next from "i18next"
import React from "react"

export default function NotFound() {
    return <div>{i18next.t("views.notfound.title")}</div>
}
