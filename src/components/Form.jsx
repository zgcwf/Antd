import { Form, Input, Button, Checkbox } from 'antd';

export default () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            // 表单名称，会作为表单字段 id 前缀使用
            name="basic"
            // 偏移量
            labelCol={{
                span: 5,
            }}
            // 占据空间
            wrapperCol={{
                span: 8,
            }}
            // 表单默认值，只有初始化以及重置时生效
            initialValues={{
                remember: true,
            }}
            // 提交表单且数据验证成功后回调事件
            onFinish={onFinish}
            // 提交表单且数据验证失败后回调事件
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                // label 标签的文本
                label="Username"
                // 字段名，支持数组
                name="username"
                // 校验规则，设置字段的校验逻辑。点击此处查看示例
                rules={[
                    {
                        // 是否为必选字段
                        required: true,
                        // 错误信息，不设置时会通过模板自动生成
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 10,
                    span: 14,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
