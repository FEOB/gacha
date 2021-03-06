import * as React from 'react';
import { Form, Input } from 'antd';
import { EditProps } from '../../common/container/TableWithEditSection';
import { VALIDATE_MSG_TEMPLATE } from '../../../../utils/validator';
import { BasicInfoFormFields } from '../../common/BasicInfo';

export const EditContaminantProps: React.FunctionComponent<EditProps> = ({
    form,
    initValues,
    onValuesChange
}) => {
    return (
        <Form
            size="small"
            layout="horizontal"
            validateMessages={VALIDATE_MSG_TEMPLATE}
            ref={form}
            hideRequiredMark={true}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 8 }}
            onValuesChange={(s, all: any) => onValuesChange(all)}
            initialValues={initValues}>
            <BasicInfoFormFields />
            <Form.Item name="fullName" label="Full Name">
                <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
                name={['molecularWeight', 'value']}
                label="Molecular Weight"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="mg/mmol" />
            </Form.Item>
            <Form.Item
                name={['molarVolume', 'value']}
                label="Molar Volume @ NBP"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="mL/gmol" />
            </Form.Item>
            <Form.Item
                name={['boilingPt', 'value']}
                label="Boiling Point"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="℃" />
            </Form.Item>
            <Form.Item
                name={['liquidDensity', 'value']}
                label="Liquid Density"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="g/mL" />
            </Form.Item>
            <Form.Item
                name={['solubility', 'value']}
                label="Solubility"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="mg/L" />
            </Form.Item>
            <Form.Item
                name={['vaporPressure', 'value']}
                label="Vapor Pressure"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" addonAfter="Pa" />
            </Form.Item>
            <Form.Item
                name={['refractive', 'value']}
                label="Refractive Index"
                rules={[]}
                normalize={v => (v ? +v : '')}>
                <Input type="number" />
            </Form.Item>
            <Form.Item name="cas" label="CAS Number" rules={[]}>
                <Input type="string" />
            </Form.Item>
        </Form>
    );
};
