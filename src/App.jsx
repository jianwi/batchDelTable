import {useEffect, useState} from 'react'
import {bitable} from "@lark-base-open/js-sdk";
import {Button, Checkbox, CheckboxGroup, Select} from "@douyinfe/semi-ui";
import "./App.css"
import {useTranslation} from "react-i18next";

function App() {

    const {t} = useTranslation()
    const [tables, setTables] = useState([])
    const [selectedTables, setSelectedTables] = useState([])

    async function getTables() {
        let tables = await bitable.base.getTableMetaList()
        console.log(tables)
        setTables(tables)
    }

    useEffect(() => {
        getTables()
    }, []);

    return (
        <>
            <CheckboxGroup value={selectedTables} onChange={(v) => {
                setSelectedTables(v)
            }}>
                {tables.map((item, index) => {
                    return <div className={'item'} key={index}>
                        <Checkbox value={item.id}>
                            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" data-icon="SheetBitableOutlined">
                                <path
                                    d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0v16h16V4H4Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M12.5 7a1 1 0 1 0 0 2H17a1 1 0 1 0 0-2h-4.5ZM6 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm6.5 3a1 1 0 1 0 0 2H17a1 1 0 1 0 0-2h-4.5ZM6 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm6.5 3a1 1 0 1 0 0 2H17a1 1 0 1 0 0-2h-4.5ZM6 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
                                    fill="currentColor"></path>
                            </svg>
                            <span style={{marginLeft:"2px"}}></span>
                            {item.name}
                        </Checkbox>
                        <Button onClick={() => {
                            bitable.base.deleteTable(item.id).then(() => {
                                getTables()
                            })
                        }} type={"danger"}>{t('delete')}</Button>
                    </div>
                })}
            </CheckboxGroup>
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: 10,
                marginTop: 10,
                background: "#eee",
                // borderTop: "5px solid #1c90ff"
            }}>
                <Checkbox onChange={(e) => {
                    console.log(e)
                    if (e.target.checked) {
                        setSelectedTables(tables.map(item=>item.id))
                    } else {
                        setSelectedTables([])
                    }
                }} checked={selectedTables.length === tables.length}/>

                <Button disabled={selectedTables.length === 0} style={{
                    marginLeft: 20
                }} onClick={() => {
                    console.log(selectedTables)
                    selectedTables.forEach((id) => {
                        bitable.base.deleteTable(id).then(() => {
                            getTables()
                        })
                    })

                }}>{t("batchDelete")}</Button>

            </div>
        </>
    )
}

export default App
