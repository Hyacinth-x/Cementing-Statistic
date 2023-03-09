<template>
    <div>
        {{ select1 }}
        <el-input placeholder="请输入内容"  class="input-with-select" style="width: 500px;" size="small" clearable="" v-model="input1">
            <el-select slot="prepend" v-model="value1"   placeholder="请选择" style="width: 150px;">
                <el-option v-for="item in select1" :label="item.key" :value="item.value" :key="item.value"></el-option>
            </el-select>
        </el-input>

        <el-input v-show="isShow" placeholder="请输入内容"  class="input-with-select" 
                    style="width: 500px; margin-left: 40px;" size="small" clearable="" v-model="input2">
            <el-select slot="prepend" v-model="value2" placeholder="请选择" style="width: 150px;">
                <el-option v-for="item in select2" :label="item.key" :value="item.value" :key="item.value"></el-option>
            </el-select>
        </el-input>

        <div style="margin: 5px 0; background-color: #f4f8fb;">
            <el-button-group style="margin-right: 5px;">
                <el-button type="primary" size="small" icon="el-icon-search" @click="search"><span class="text_color">查询</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-refresh-right" @click="reset"><span class="text_color">重置</span></el-button>
            </el-button-group>
            <el-button-group style="margin: 0 5px;">
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline" @click="add"><span class="text_color">添加普通条件</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加数值条件</span></el-button>
                <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加时间条件</span></el-button>
            </el-button-group>
            <el-button-group style="margin: 0 5px;">
                <el-button type="success" size="small" icon="el-icon-plus" @click="handleEdit()"><span class="text_color">新增</span></el-button>
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
    </div>
</template>

<script>
export default {
    name: 'SelectButton',
    props:['select'],
    data() {
        return {
            input1:'',
            input2:'',
            value1:'',
            value2:'',
            select1:[],
            select2: [],
            isShow:false
        }
    },
    methods: {
        fuzhi() {
            var _this = this;
            for (let i = 0; i < _this.select.length; i++) {
                _this.select1.push(_this.select[i]);
            }
        },
        search() {
            
        },
        reset() {
            
        },
        add() {
            
        },
        handleEdit() {
            
        }
    },
    mouted() {
        this.fuzhi()
    }
}
</script>

<style>

</style>