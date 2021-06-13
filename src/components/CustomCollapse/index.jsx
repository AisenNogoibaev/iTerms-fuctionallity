import { Collapse } from "antd";
import "./CustomCollapse.less";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const CustomCollapse = ({ el }) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => {
        return isActive ? (
          <MinusOutlined style={{ color: "#8770FF", fontSize: 16 }} />
        ) : (
          <PlusOutlined style={{ color: "#8770FF", fontSize: 16 }} />
        );
      }}
      ghost
    >
      {el.questions.map((el, id) => {
        return (
          <Panel header={el.question} key={id}>
            <div
              className="answer"
              dangerouslySetInnerHTML={{ __html: el.answer }}
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};
