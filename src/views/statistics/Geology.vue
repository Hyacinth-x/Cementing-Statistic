<template>
    <div>
        <div>
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width: 600px;" size="small" clearable="">
                <el-select slot="prepend" v-model="select" placeholder="请选择" style="width: 150px;">
                    <el-option label="是否为水层/油层" value="1"></el-option>
                    <el-option label="是否为砂岩/泥岩" value="2"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div style="margin: 5px 0; background-color: #f4f8fb;">
            <el-button-group style="margin-right: 5px;">
                <el-button type="primary" size="small" icon="el-icon-search"><span class="text_color">查询</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-refresh-right"><span class="text_color">重置</span></el-button>
            </el-button-group>
            <el-button-group style="margin: 0 5px;">
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加普通条件</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加数值条件</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加时间条件</span></el-button>
            </el-button-group>
            <el-button-group style="margin: 0 5px;">
                <el-button type="success" size="small" icon="el-icon-plus"><span class="text_color">新增</span></el-button>
                <el-button type="warning" size="small" icon="el-icon-upload2"><span class="text_color">导入</span></el-button>
            </el-button-group>

            <el-row style="float: right; padding: 2px;">
                <el-button icon="el-icon-download" circle size="mini"></el-button>
                <el-button icon="el-icon-printer" circle size="mini"></el-button>
                <el-button icon="el-icon-refresh" circle size="mini"></el-button>
                <el-button icon="el-icon-full-screen" circle size="mini"></el-button>
                <el-button icon="el-icon-s-grid" circle size="mini"></el-button>
            </el-row>
        </div>
        <div>
            <!-- 设置表格线，固定表头和列，表头内容居中显示 -->
            <el-table :data="tableData" border stripe 
            :header-cell-class-name="headerBg"
             height="400"
             max-height="400"
             :header-cell-style="{'text-align':'center'}"
            >
                <el-table-column prop="wellId" label="井号"></el-table-column>
                <el-table-column prop="address" label="地区"></el-table-column>
                <el-table-column prop="structure" label="构造"></el-table-column>
                <el-table-column prop="stratum" label="地层"></el-table-column>
                <el-table-column prop="depth" label="深度(m)"></el-table-column>
                <el-table-column prop="wellSection" label="井段(m)"></el-table-column>
                <el-table-column prop="display" label="显示"></el-table-column>
                <el-table-column prop="formationPressure" label="地层压力"></el-table-column>
                <el-table-column prop="collapsePressure" label="坍塌压力"></el-table-column>
                <el-table-column prop="rupturePressure" label="破裂压力"></el-table-column>
                <el-table-column prop="thickness" label="厚度(m)"></el-table-column>
                <el-table-column prop="cliff" label="砂岩/泥岩"></el-table-column>
                <el-table-column prop="layer" label="水层/油层"></el-table-column>

                <el-table-column label="操作" fixed="right" align="center" width="180">
                    <!-- eslint-disable-next-line -->
                    <template slot-scope='scope'>
                        <el-button type="primary" plain size="small" icon="el-icon-edit"><span style="color: #3b4246;">编辑</span></el-button>
                        <el-button type="danger" size="small" icon="el-icon-delete"><span class="text_color">删除</span></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="padding: 10px 0">
            <el-pagination 
                :page-sizes="[100, 200, 300, 400]" 
                :page-size="100" 
                layout="total, sizes, prev, pager, next, jumper" 
                :total="400"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Geology',
    data() {
        const item = {
            wellId: '1111',
            address: '222',
            structure: '333',
            stratum: '11111',
            depth: 100,
            wellSection: 200,
            display: '22222',
            formationPressure: '44444',
            collapsePressure: '44444',
            rupturePressure: '44444',
            thickness: 50,
            cliff: 'a',
            layer:'b'
        };
        return {
            tableData: Array(50).fill(item),
            headerBg: 'headerBg',
            select: '',
            input:''
        }
    }
}
</script>

<style>
.headerBg{
    /* 设置表头背景颜色 */
    background: #daebfb !important; 
}
</style>