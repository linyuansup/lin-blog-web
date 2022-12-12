import { ElMessage } from "element-plus"

const message = {
    error: (msg) => {
        ElMessage({
            message: msg,
            type: "error",
            duration: 3000,
        })
    },
    warning: (msg) => {
        ElMessage({
            message: msg,
            type: "warning",
            duration: 3000,
        })
    },
    success: (msg) => {
        ElMessage({
            message: msg,
            type: "success",
            duration: 3000,
        })
    }
}

export default message;
