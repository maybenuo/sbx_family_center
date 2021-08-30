<template>
    <div class="hour-surplus">
        <template>
            <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
                <el-select v-model="searchID" slot="prepend" placeholder="请选择">
                <el-option label="学生姓名" value="studentName"></el-option>
                <el-option label="用户电话" value="studentTel"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="searchInfo"></el-button>
            </el-input>
        </template>
        <el-divider></el-divider>
        <el-descriptions class="margin-top" title="课时信息" :column="3" :size="size" border>
            <template slot="extra">
                <el-button type="primary" size="small">复制</el-button>
            </template>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    学生名
                </template>
                {{ lessonInfo.studentName }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                </template>
                {{ lessonInfo.studentTel }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    课程
                </template>
                {{ lessonInfo.lessonType }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    备注
                </template>
                <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-time"></i>
                    课时
                </template>
                {{ lessonInfo.lessonHours }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    家庭住址
                </template>
                {{ lessonInfo.studentAdress }}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default {
    name: 'hourSurplus',
    data () {
        return {
            searchID: '',
            searchValue: '123',
            lessonInfo: {
                studentName: '张三',
                studentTel: '15902307888',
                lessonType: '初三语文',
                lessonHours: 3.5,
                studentAdress: '江苏省苏州市吴中区吴中大道 1188 号'
            }
        }
    },
    methods: {
        searchInfo: function () {
            // 校验字段，发送请求
        }
    }
}
</script>

<style lang="scss">
    .hour-surplus {
        .el-select {
            min-width: 120px;
        }
        .el-descriptions__body {
            td {
                word-break: break-all;
            }
        }
    }
</style>
