import { createTheme } from "@mui/material/styles"
import Color from "color"

declare module "@mui/material/styles/createPalette" {
    export interface TypeBackground {
        body: string
        sidebar: string
    }
    export interface Palette {
        toast: {
            default: string
            success: string
            warning: string
            error: string
        }
        table: {
            header: string
            border: string
        }
    }
    export interface PaletteOptions {
        toast: {
            default: string
            success: string
            warning: string
            error: string
        }
        table: {
            header: string
            border: string
        }
    }
}

export default createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        caption: {
            fontWeight: "bold",
            textTransform: "uppercase"
        },
        htmlFontSize: 14
    },
    palette: {
        background: {
            body: "#fff",
            paper: "#fff",
            sidebar: "#F3F3F0"
        },
        toast: {
            default: "#4686e4",
            success: "#73d371",
            warning: "#f6c24a",
            error: "#E74C3C"
        },
        divider: "#CCCCD4",
        table: {
            header: Color("#f3f2ef").darken(0.1).hex(),
            border: Color("#f3f2ef").darken(0.2).hex()
        },
        primary: {
            light: "#00CCCC",
            main: "#009999",
            dark: "#007082"
        },
        secondary: {
            light: "#ff4081",
            main: "#333353",
            dark: "#c51162"
        },
        text: {
            primary: "#222",
            secondary: "#555"
        },
        info: {
            main: "#007EB1"
        },
        success: {
            main: "#01893A"
        },
        warning: {
            main: "#E96401"
        },
        error: {
            main: "#D72339"
        }
    },
    shadows: [
        null,
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, 1)",
        "0 0 15px rgba(0, 0, 0, .35)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)",
        "0 2px 6px rgba(0, 0, 0, .12)"
    ],
    components: {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    top: "initial"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    fontSize: 14
                },
                hasClearIcon: {
                    paddingRight: 20
                },
                option: {
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                sizeSmall: {
                    fontSize: 14
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    padding: "10px 16px",
                    borderRadius: 0
                }
            }
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                li: {
                    "& a": {
                        color: "inherit",
                        display: "flex",
                        textDecoration: "none"
                    }
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: "8px 20px"
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: "8px 20px"
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 12,
                    textTransform: "uppercase"
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: 10,
                    fontWeight: "normal",
                    textTransform: "none"
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                formControl: {
                    transform: null
                },
                root: {
                    "&$outlined": {
                        transform: "translate(14px, 23px) scale(1)"
                    }
                },
                outlined: {
                    "&$sizeSmall": {
                        transform: "translate(14px, 16px) scale(1)"
                    }
                },
                sizeSmall: {},
                shrink: {
                    transform: null
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    fontSize: 14,

                    "&:after": {
                        borderBottom: `2px solid #009999`
                    }
                },
                underline: {
                    "&:before": {
                        borderBottom: `2px solid #CCCCD4`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `2px solid #009999`
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "inherit"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    paddingRight: 8
                },
                input: {
                    textOverflow: "ellipsis"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: "normal"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: 14
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 16
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled",
                size: "small",
                InputLabelProps: {
                    shrink: true
                }
            },
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFF"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                stickyHeader: {
                    backgroundColor: "#F3F3F0"
                },
                root: {
                    fontSize: 14,
                    borderBottom: `solid 1px #CCCCD4`
                },
                head: {
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: "1"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.MuiTableRow-hover .MuiTableCell-root": {
                        cursor: "pointer"
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    borderBottom: `solid 1px #CCCCD4`
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(250,250,250)"
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: "#fff",
                    backgroundColor: "#000"
                }
            }
        }
    }
})
